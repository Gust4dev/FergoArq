export const CONTACT = {
    whatsapp: {
        number: '556296524616',
        display: '+55 62 9652-4616',
        defaultMessage: 'Olá! Vim pelo site e gostaria de mais informações.',
    },
    email: 'sabrinaarqeurb@gmail.com',
    instagram: {
        url: 'https://instagram.com/sabrinafergo',
        handle: '@sabrinafergo',
    },
    location: 'London Eye Office — Anápolis-GO',
} as const;

export function buildWhatsAppUrl(customMessage?: string): string {
    const message = customMessage ?? CONTACT.whatsapp.defaultMessage;
    return `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
