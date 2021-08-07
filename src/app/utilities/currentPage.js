
const CURRENT_STORY_KEY = "current_story";

export function setCurrentStory(storyNumber) {
  localStorage.setItem(CURRENT_STORY_KEY, storyNumber);
}

export function getLastStory() {
  const storyNumberStr = localstorage.getItem(CURRENT_STORY_KEY);
  if (storyNumberStr == null) return 0;
  return parseInt(storyNumberStr);
}

export function hasSavedStory() {
  return localstorage.getItem(CURRENT_STORY_KEY) != null;
}
