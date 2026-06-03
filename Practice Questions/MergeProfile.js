const mergeProfile = (profile1, profile2) => ({ ...profile1, ...profile2 });
module.exports = mergeProfile;