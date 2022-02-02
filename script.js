const data = [
  {
    name: 'Europe',
    url: '/europe',
    children: [],
  },
  {
    name: 'Spain',
    url: '/europe/spain',
    children: [],
  },
  {
    name: 'Italy',
    url: '/europe/italy',
    children: [],
  },
  {
    name: 'Germany',
    url: '/europe/germany',
    children: [],
  },

  {
    name: 'Africa',
    url: '/africa',
    children: [],
  },
  {
    name: 'Morocco',
    url: '/africa/morocco',
    children: [],
  },
  {
    name: 'Marrakesh',
    url: '/africa/morocco/marrakesh',
    children: [],
  },
  {
    name: 'Congo',
    url: '/africa/congo',
    children: [],
  },
  {
    name: 'North America',
    url: '/north-america',
    children: [],
  },
  {
    name: 'Canada',
    url: '/north-america/canada',
    children: [],
  },
  {
    name: 'Montreal',
    url: '/north-america/canada/montreal',
    children: [],
  },
  {
    name: 'Vancouver',
    url: '/north-america/canada/vancouver',
    children: [],
  },
  {
    name: 'Berlin',
    url: '/europe/germany/berlin',
    children: [],
  },
  {
    name: 'Greenland',
    url: '/north-america/greenland',
    children: [],
  },
];

const sortDataPerLevel = data => {
  return data.reduce((dataPerLevel, item) => {
    const level = item.url.slice(1).split('/').length;

    if (dataPerLevel[level]) {
      dataPerLevel[level].push(item);
    } else {
      dataPerLevel[level] = [item];
    }

    return dataPerLevel;
  }, {});
};

const nestData = data => {
  return data;
};

const dataPerLevel = sortDataPerLevel(data);
console.log(dataPerLevel);
const nestedData = nestData(dataPerLevel);
