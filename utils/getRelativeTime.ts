import * as dateFns from 'date-fns';

function getRelativeTime(time: number) {
  return dateFns.formatDistanceToNow(new Date(time), { addSuffix: true, includeSeconds: true });
}

export default getRelativeTime;