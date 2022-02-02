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

const dataPerLevel = {};
const nestedData = [];

const getLevel = ({ url }) => url.split('/').length;

const sortDataPerLevel = (data, level = 1) => {
  data.forEach(item => {
    const level = getLevel(item);
    if (dataPerLevel[level]) {
      dataPerLevel[level].push(item);
    } else {
      dataPerLevel[level] = [item];
    }
  });
};

sortDataPerLevel(data);
console.log(dataPerLevel);
