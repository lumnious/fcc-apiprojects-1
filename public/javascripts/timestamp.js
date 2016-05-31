var months = {
	0: ['January', 'january', 'jan'],
	1: ['February', 'february', 'feb'],
	2: ['March', 'march', 'mar'],
	3: ['April', 'april', 'apr'],
	4: ['May', 'may'],
	5: ['June', 'june', 'jun'],
	6: ['July', 'july', 'jul'],
	7: ['August', 'august', 'aug'],
	8: ['September', 'september', 'sep'],
	9: ['October', 'october', 'oct'],
	10: ['November', 'november', 'nov'],
	11: ['December', 'december', 'dec']
};

function valid_date (string) {
	var decoded = decodeURI(string).toLowerCase();
	var test = /[\s\.,;\:\-_|]+/g;
	decoded = decoded.trim().replace(test, '|').split('|');
	if (decoded.length !== 3) {
		return false;
	}
	if (isNaN(decoded[1]) || isNaN(decoded[2])) {
		return false;
	}
	for (var m in months) {
		for(var i = 0; i < months[m].length; i++) {
			if(decoded[0] === months[m][i]) {
				return decoded[2] + '-' + m + '-' + decoded[1];
			}
		}
	}
	return false;
}


module.exports = function(value) {
	return {
		unix : function () {
			var sp, d;
			if (!isNaN(value)) {
				return value;
			} else if (valid_date(value)) {
				sp = valid_date(value).split('-');
				d = new Date(sp[0], sp[1], sp[2]);
				return d.getTime();
			} else {
				return null;
			}
		},
		natural : function () {
			var sp, d;
			if (!isNaN(value)) {
				d = new Date(Number(value));
				return months[d.getMonth()][0] + ' ' + d.getDate() + ', ' + d.getFullYear();
			} else if (valid_date(value)) {
				sp = valid_date(value).split('-');
				d = new Date(sp[0], sp[1], sp[2]);
				return months[d.getMonth()][0] + ' ' + d.getDate() + ', ' + d.getFullYear();
			} else {
				return null;
			}
		}
	};
};