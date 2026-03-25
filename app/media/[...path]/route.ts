import fs from 'node:fs/promises';
import path from 'node:path';

import { NextResponse } from 'next/server';

const uploadsRoot = path.join(process.cwd(), 'extracted', 'uploads');

const mimeTypes: Record<string, string> = {
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.json': 'application/json',
  '.mp4': 'video/mp4',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml'
};

type RouteContext = {
  params: Promise<{ path: string[] }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { path: parts } = await context.params;

  if (parts.some((part) => part === '..' || part.includes('\\'))) {
    return NextResponse.json({ error: 'Invalid media path' }, { status: 400 });
  }

  const filePath = path.resolve(uploadsRoot, ...parts);

  if (!filePath.startsWith(uploadsRoot)) {
    return NextResponse.json({ error: 'Invalid media path' }, { status: 400 });
  }

  try {
    const file = await fs.readFile(filePath);
    const extension = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[extension] || 'application/octet-stream';

    return new NextResponse(file, {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Type': contentType
      }
    });
  } catch {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
}
