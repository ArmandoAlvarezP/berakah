export const formatFechaEmision = (fecha: Date | string): string => {
    const date = fecha instanceof Date ? fecha : new Date(fecha);
    return date.toLocaleDateString('es-MX', { timeZone: 'UTC' });
};
