export function lambda<F extends (...args: any[]) => any>(f: F): F {
    return f;
}
