export const required = [
    value => !!value.trim() || 'Required.'
]
export const email = [
    value => !!value.trim() || 'Required.',
    value => /.+@.+\..+/.test(value) || 'E-mail must be valid.'
    
]
export const min = [
    v => v.length >= 8 || 'Min 8 characters'
]
export const rePassword = [
    v => v.length >= 8 || 'Min 8 characters'
]