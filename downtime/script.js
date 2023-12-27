"use strict";

var activity = null;
var commitCountToClass = {
    1: 'on1',
    2: 'on1',
    3: 'on2',
    4: 'on2',
    5: 'on3',
    6: 'on3',
    7: 'on3',
};

$(function(){
    var activity_resp = $.get('./activity.json').done(function(data){
        activity = data.data;
        for(var i=0; i < activity.length; i++){
            var item = activity[i];
            var calculatedClasses = [];

            var cc = item.commits_count;
            var calculatedClass = commitCountToClass[cc];
            if (cc >= 8){
                calculatedClass = 'on4';
            }
            if (!calculatedClass){
                calculatedClass = '';
            }
            calculatedClasses.push(calculatedClass);
            // if (item.date == '2021-12-27'){
            //     debugger;
            //     calculatedClasses.push('deb');
            // }

            var aClass = '';
            if (item.user_absence && item.user_absence.full_day && !item.user_absence.work_in_absence){
                switch (item.user_absence.type){
                    case 'absence': aClass = 'absense'; break;
                    case 'illness': aClass = 'illness'; break;
                    case 'vacation': aClass = 'vacation'; break;
                }
            }

            if (aClass){
                calculatedClasses.push(aClass);
            }
            var date = moment(item.date, 'YYYY-MM-DD');
            var year = date.year();
            var week = date.isoWeek()-1;
            var weekday = date.weekday()-1;
            if (weekday === -1){
                weekday = 6;
            }
            var className = '' + weekday + '_' + week;
            calculatedClasses.push('d' + date.format('YYYY_MM_DD'));
            var square = $('#y' + year + ' .' + className);
            if (!square[0]){
                debugger;
            }
            for (var j = 0; j < calculatedClasses.length; j++){
                square.addClass(calculatedClasses[j]);
            }
        }
    });
});
