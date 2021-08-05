import { useState } from 'react';

const LOCALSTORAGE_THOUGHTS = "thoughts"

let _nextId = 0

export function useThoughts() {
	const loadedThoughts = localStorage.getItem(LOCALSTORAGE_THOUGHTS)
		? JSON.parse(localStorage.getItem(LOCALSTORAGE_THOUGHTS))
		: []
	const [thoughts, setThoughts] = useState(loadedThoughts)

  function updateThoughts(newThoughts) {
    setThoughts(newThoughts)
    localStorage.setItem(LOCALSTORAGE_THOUGHTS, JSON.stringify(newThoughts))
  }

  return {
    thoughts,
    removeThought(id) {
      const newThoughts = thoughts.filter(t => t.id !== id)
      updateThoughts(newThoughts)	
    },
    createThought(text) {
      const newThought = {
        id: _nextId ++,
        text
      }
      const newThoughts = [...thoughts, newThought]
      updateThoughts(newThoughts)
    },
    removeAll() {
      updateThoughts([])
    }
  }
}
