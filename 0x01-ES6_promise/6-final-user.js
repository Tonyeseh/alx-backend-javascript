import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((data) => {
      const results = [];

      for (const d of data) {
        results.push({
          status: d.status,
          value: d.status === 'fulfilled' ? d.value : String(d.reason),
        });
      }
      return results;
    });
}
