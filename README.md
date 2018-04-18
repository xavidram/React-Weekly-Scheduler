# ReactJS Scheduler using CSS Grid Layout

### About
While wanting to learn ReactJS and CSS Grid Layouts, and in the need of an automatied for of scheduling employee work schedules. I wrote a simple ReactJS component, split into smaller sub components in the event someone wants to modify the base module. This project is still a work in progress and any feedback is always welcome.

The project is build off the Create-React-App CLI tool with routing and sass postprocessing integrated.

### Get Started
First download the repo
`git clone https://github.com/xavidram/React-Weekly-Scheduler.git`

Run npm install or yarn install in the project route folder
`yarn install`

Run the application to start the development server
`yarn start`

Once the development server is ran, the main page should appear.
![Image of scheduler](https://imgur.com/a/peLh7)

### Integrating into new pages
Simply import the modules as you need them into the page 
`import Scheduler from '../components/scheduler';`

Then simply declare the component in the area of the render you would like it to appear in passing the proper parameters.
```
render() {
    return(
        <Scheduler
            hourSegments="4"
            startHour="8"
            endHour="18"
            startDay="1"
            endDay="5"
        />
    );
}
```

### Parameters

**hourSegments** Number of segments per hour section. 1 = 60 minutes, 2 = 30 minutes, 4 = 15 minutes
**startHour** Start hour from 1 - 24
**endHour** End hour from 1 - 24
**startDay** Start day of the week (0 - 6). Sunday = 0 -> Saturday = 6
**endDay** End day of the week (0 - 6). Sunday = 0 -> Saturday = 6

### Passing Data to populate schedules
Pass an array of user schedules to the scheduler, the scheduler will filter the data as needed.

**name** Name of user
**color** Hex Color code for user schdule
**shift.date** Date of this work schedule for a single day
**shift.Start** Start time of the shift schedule color coding
**shift.bStart** User Break Start time if they have a break in between the work shift.
**shift.bEnd** User Break End time.
**shift.End** End time of the shift.

*If the user has 00:00 in the bStart and bEnd fields, there is no break for this users schedule.*


Basic array of schedules:
```
[
    {
    "name": "Student1",
    "color": "#FF715B",
    "shift": {
        "date": "04/16/2018",
        "Start": "10:30",
        "bStart": "14:00",
        "bEnd": "14:30",
        "End": "18:00"
    }
}, {
    "name": "Student2",
    "color": "#FFE74C",
    "shift": {
        "date": "04/16/2018",
        "Start": "11:00",
        "bStart": "00:00",
        "bEnd": "00:00",
        "End": "14:00"
    }
}]
```

### License
MIT