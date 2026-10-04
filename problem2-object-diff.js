// Problem 2 — Object Diff
function diffObjects(oldObj, newObj) {
  const result = { added: {}, removed: {}, changed: {} };
  const allKeys = new Set([...Object.keys(oldObj), ...Object.keys(newObj)]);

  for (const key of allKeys) {
    const inOld = Object.hasOwn(oldObj, key);
    const inNew = Object.hasOwn(newObj, key);

    if (!inOld && inNew) {
      result.added[key] = newObj[key];
    } else if (inOld && !inNew) {
      result.removed[key] = oldObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      result.changed[key] = { from: oldObj[key], to: newObj[key] };
    }
  }
  return result;
}

console.log(diffObjects(
  { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
  { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
))
// { added: { city: 'Kingston' }, removed: { country: 'Jamaica' }, changed: { role: { from: 'Engineer', to: 'Senior Engineer' } } }
