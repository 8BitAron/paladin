export const UP = 'counter/UP'
export const DOWN = 'counter/DOWN'

export function up() {
    return {
        type: UP
    }
}

export function down() {
    return {
        type: DOWN
    }
}
