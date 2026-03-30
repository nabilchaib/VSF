from __future__ import annotations

import os
from collections.abc import Mapping

from .models import CampaignConfig


class LiveMutationNotAllowed(RuntimeError):
    """Raised when a live mutation is attempted without approval."""


def require_live_mutation_gate(
    confirm_live: bool,
    environ: Mapping[str, str] | None = None,
) -> None:
    env = os.environ if environ is None else environ
    if not confirm_live:
        raise LiveMutationNotAllowed("live mutation requires --confirm-live")

    allowed = env.get("GOOGLE_ADS_ALLOW_LIVE_MUTATION", "").strip().lower()
    if allowed not in {"1", "true", "yes", "on"}:
        raise LiveMutationNotAllowed(
            "GOOGLE_ADS_ALLOW_LIVE_MUTATION must be set to a truthy value before live mutation"
        )


def require_live_mutation_approval(
    config: CampaignConfig,
    confirm_live: bool,
    environ: Mapping[str, str] | None = None,
) -> None:
    if config.dry_run:
        raise LiveMutationNotAllowed("config.dry_run is true; live mutation is blocked")
    require_live_mutation_gate(confirm_live, environ=environ)
