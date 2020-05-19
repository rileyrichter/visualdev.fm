import { CountUp } from 'https://rileyrichter.github.io/visualdev.fm/countUp.min.js';

  var options = {
	useEasing: true,
  useGrouping: true,
  seperator: ',',
  decimal: '.',
};
var demo = new CountUp('number', 0, 4.25, 2, 2.5, options);
