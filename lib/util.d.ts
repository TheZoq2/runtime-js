export function lineBuffered(processLine: (line: string) => void): (bytes: Uint8Array) => void;
