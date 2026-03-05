import { createHash, randomBytes } from 'crypto';

/**
 * 生成 UUID v4
 * @returns UUID 字符串
 */
export function generateUUID(): string {
  const bytes = randomBytes(16);
  // UUID v4 版本标识
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  // UUID 变体标识
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  const hex = bytes.toString('hex');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

/**
 * 生成简短 UUID（不含连字符）
 * @returns 简短 UUID 字符串
 */
export function generateShortUUID(): string {
  return generateUUID().replace(/-/g, '');
}

/**
 * 基于内容生成确定性 UUID v5
 * @param namespace 命名空间 UUID
 * @param name 名称
 * @returns UUID v5 字符串
 */
export function generateUUIDv5(namespace: string, name: string): string {
  const hash = createHash('sha1');
  hash.update(namespace);
  hash.update(name);
  const digest = hash.digest();

  // 设置版本为 5
  digest[6] = (digest[6] & 0x0f) | 0x50;
  // 设置变体
  digest[8] = (digest[8] & 0x3f) | 0x80;

  const hex = digest.toString('hex');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
}

/**
 * 预定义命名空间 UUID
 */
export const NAMESPACE_DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
export const NAMESPACE_URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
export const NAMESPACE_OID = '6ba7b812-9dad-11d1-80b4-00c04fd430c8';
export const NAMESPACE_X500 = '6ba7b814-9dad-11d1-80b4-00c04fd430c8';
