import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Day, Week, ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';

class App extends React.Component {
    constructor() {
        super(...arguments);
        this.data = [{
            Id: 1,
            Subject: 'Nancy',
            StartTime: new Date(2018, 3, 1, 10, 0),
            EndTime: new Date(2018, 3, 1, 12, 30),
            IsAllDay: false,
            HallId: 1,
            RoomId: 1,
            OwnerId: 1
        }, {
            Id: 2,
            Subject: 'Michael',
            StartTime: new Date(2018, 3, 1, 10, 0),
            EndTime: new Date(2018, 3, 1, 12, 30),
            IsAllDay: false,
            HallId: 1,
            RoomId: 1,
            OwnerId: 3
        }, {
            Id: 3,
            Subject: 'Steven',
            StartTime: new Date(2018, 3, 1, 10, 0),
            EndTime: new Date(2018, 3, 1, 12, 30),
            IsAllDay: false,
            HallId: 1,
            RoomId: 2,
            OwnerId: 2
        }, {
            Id: 4,
            Subject: 'Meeting',
            StartTime: new Date(2018, 3, 4, 14, 0),
            EndTime: new Date(2018, 3, 4, 15, 30),
            IsAllDay: false,
            HallId: 1,
            RoomId: 1,
            OwnerId: 1
        }, {
            Id: 5,
            Subject: 'Conference',
            StartTime: new Date(2018, 3, 3, 8, 0),
            EndTime: new Date(2018, 3, 3, 9, 30),
            IsAllDay: false,
            HallId: 1,
            RoomId: 1,
            OwnerId: 3
        }, {
            Id: 6,
            Subject: 'Break Time',
            StartTime: new Date(2018, 3, 5, 13, 0),
            EndTime: new Date(2018, 3, 5, 14, 0),
            IsAllDay: false,
            HallId: 1,
            RoomId: 2,
            OwnerId: 2
        }, {
            Id: 7,
            Subject: 'Holiday',
            StartTime: new Date(2018, 3, 5),
            EndTime: new Date(2018, 3, 7),
            IsAllDay: true,
            HallId: 1,
            RoomId: 1,
            OwnerId: 1
        }, {
            Id: 8,
            Subject: 'Sick Leave',
            StartTime: new Date(2018, 3, 5),
            EndTime: new Date(2018, 3, 6),
            IsAllDay: true,
            HallId: 1,
            RoomId: 1,
            OwnerId: 3
        }, {
            Id: 9,
            Subject: 'Weekend',
            StartTime: new Date(2018, 3, 7),
            EndTime: new Date(2018, 3, 9),
            IsAllDay: true,
            HallId: 1,
            RoomId: 2,
            OwnerId: 2
        }];
        this.roomData = [
            { RoomText: 'ROOM 1', Id: 1, RoomColor: '#cb6bb2' },
            { RoomText: 'ROOM 2', Id: 2, RoomColor: '#56ca85' }
        ];
        this.ownerData = [
            { OwnerText: 'Nancy', Id: 1, GroupId: 1, OwnerColor: '#ffaa00' },
            { OwnerText: 'Steven', Id: 2, GroupId: 2, OwnerColor: '#f8a398' },
            { OwnerText: 'Michael', Id: 3, GroupId: 1, OwnerColor: '#7499e1' }
        ];
        this.workHours1 = [
            { startHour: "07:00", endHour: "16:00" }, // for Sunday 
            { startHour: "06:00", endHour: "17:00" }, // for Monday 
            { startHour: "05:00", endHour: "18:00" }, // for Tuesday 
            { startHour: "06:30", endHour: "19:00" }, // for Wednesday 
            { startHour: "05:30", endHour: "20:00" }, // for Thursday 
            { startHour: "10:00", endHour: "21:00" }, // for Friday 
            { startHour: "13:00", endHour: "22:00" } // for Saturday
        ];
        this.workHours2 = [
            { startHour: "08:00", endHour: "17:00" }, // for Sunday 
            { startHour: "09:00", endHour: "18:00" }, // for Monday 
            { startHour: "10:00", endHour: "19:00" }, // for Tuesday 
            { startHour: "11:00", endHour: "20:00" }, // for Wednesday 
            { startHour: "12:00", endHour: "21:00" }, // for Thursday 
            { startHour: "13:00", endHour: "22:00" }, // for Friday 
            { startHour: "14:00", endHour: "23:00" } // for Saturday 
        ];
        this.workHours3 = [
            { startHour: "07:30", endHour: "17:00" }, // for Sunday 
            { startHour: "10:00", endHour: "16:00" }, // for Monday 
            { startHour: "12:30", endHour: "19:00" }, // for Tuesday 
            { startHour: "10:00", endHour: "18:00" }, // for Wednesday 
            { startHour: "13:00", endHour: "20:00" }, // for Thursday 
            { startHour: "08:00", endHour: "21:00" }, // for Friday 
            { startHour: "11:00", endHour: "18:00" } // for Saturday 
        ];
        this.islayoutChanged = false;
    }

    onDataBound(args) {
        if (this.islayoutChanged) {
            var renderedDates = this.scheduleObj.activeView.getRenderDates();
            this.scheduleObj.resetWorkHours();
            for (var i = 0; i < renderedDates.length; i++) {
                var dayIndex = renderedDates[i].getDay();
                if (dayIndex !== 0 && dayIndex !== 6) {
                    this.scheduleObj.setWorkHours([renderedDates[i]], this.workHours1[dayIndex].startHour, this.workHours1[dayIndex].endHour, 0);
                    this.scheduleObj.setWorkHours([renderedDates[i]], this.workHours2[dayIndex].startHour, this.workHours2[dayIndex].endHour, 1);
                    this.scheduleObj.setWorkHours([renderedDates[i]], this.workHours3[dayIndex].startHour, this.workHours3[dayIndex].endHour, 2);
                }
            }
        }
    }

    onActionComplete(args) {
        if (args.requestType === "toolBarItemRendered" || args.requestType === "dateNavigate" || args.requestType === "viewNavigate") {
            this.islayoutChanged = true;
        }
    }

    render() {
        return <ScheduleComponent width='100%' height='550px' ref={schedule => (this.scheduleObj = schedule)} currentView='Week' selectedDate={new Date(2018, 3, 4)} eventSettings={{ dataSource: this.data }} group={{ resources: ['Rooms', 'Owners'] }} dataBound={this.onDataBound.bind(this)}
            actionComplete={this.onActionComplete.bind(this)}>
            <ViewsDirective>
                <ViewDirective option='Day' />
                <ViewDirective option='Week' />
            </ViewsDirective>
            <ResourcesDirective>
                <ResourceDirective field='RoomId' title='Room' name='Rooms' dataSource={this.roomData} textField='RoomText' idField='Id' colorField='RoomColor'>
                </ResourceDirective>
                <ResourceDirective field='OwnerId' title='Owner' name='Owners' allowMultiple={true} dataSource={this.ownerData} textField='OwnerText' idField='Id' groupIDField='GroupId' colorField='OwnerColor'>
                </ResourceDirective>
            </ResourcesDirective>
            <Inject services={[Day, Week]} />
        </ScheduleComponent>;
    }
};

ReactDOM.render(<App />, document.getElementById('schedule'));