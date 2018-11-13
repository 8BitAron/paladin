export const UP = 'counter/UP'
export const DOWN = 'counter/DOWN'

export function up() {
  return {
    type: UP
  }
}

export function down() {
  return function(dispatch, getState) {
    if (getState().counter.count === 0) {
      return Promise.resolve()
    }

    dispatch(subtract())
  }
}

function subtract() {
  return {
    type: DOWN
  }
}
