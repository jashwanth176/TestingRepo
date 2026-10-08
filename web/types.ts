export interface Greeting {
  name: string;
}

export function formatGreeting(value: Greeting): string {
  return `Hello, ${value.name}!`;
}

export function formatCount(count: number): string {
  return `Count: ${count}`;
}

export function isNamed(value: Greeting): boolean {
  return value.name.trim().length > 0;
}
