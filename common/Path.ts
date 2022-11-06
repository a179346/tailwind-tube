import { ePage } from '../types/ePage';

export const Path: Record<ePage, string> = {
  [ePage.HOME]: '/',
  [ePage.SHORTS]: '/shorts',
  [ePage.SUBSCRIPTIONS]: '/feed/subscriptions',
  [ePage.CHANNEL]: '/channel',
  [ePage.MUSIC]: '/music',
  [ePage.LIBRARY]: '/feed/library',
  [ePage.DOWNLOADS]: '/feed/downloads',
};
