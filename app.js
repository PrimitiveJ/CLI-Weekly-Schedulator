const mongoose = require('mongoose')
const inquirer = require('inquirer')
const Week = require('./models/week')
const { printTable } = require('console-table-printer');


mongoose.connect("mongodb://localhost/schedulerdb")


function promptUser() {
    inquirer.prompt([{
        type: 'list',
        name: 'scheduleWeek',
        message: 'What would you like to do?',
        choices: ['Create a new Weekly Schedule', 'Edit my weekly Schedule', 'Display my current schedule', 'Delete my current schedule', 'Quit']
    }, ]).then((answers) => {
        console.log(answers)
        if (answers.scheduleWeek == "Create a new Weekly Schedule") {
            createPrompt();
        } else if (answers.scheduleWeek == "Edit my weekly Schedule") {
            editPrompt();
        } else if (answers.scheduleWeek == "Display my current schedule") {
            showPrompt();
        } else if (answers.scheduleWeek == "Delete my current schedule") {
            deletePrompt();
        } else {
            console.log("GOODBYE")
            answers.scheduleWeek = ""
            return
        }
    })





    function createPrompt() {
        inquirer.prompt([{
            type: 'input',
            name: 'MondayEvents',
            message: 'What events will take place on Monday?',
            default: ''
        }, {
            type: 'input',
            name: 'MondayTasks',
            message: 'What tasks must be performed on Monday?',
            default: ''
        }, {
            type: 'input',
            name: 'TuesdayEvents',
            message: 'What events will take place on Tuesday?',
            default: ''
        }, {
            type: 'input',
            name: 'TuesdayTasks',
            message: 'What tasks must be performed on Tuesday?',
            default: ''
        }, {
            type: 'input',
            name: 'WednesdayEvents',
            message: 'What events will take place on Wednesday?',
            default: ''
        }, {
            type: 'input',
            name: 'WednesdayTasks',
            message: 'What tasks must be performed on Wednesday?',
            default: ''
        }, {
            type: 'input',
            name: 'ThursdayEvents',
            message: 'What events will take place on Thursday?',
            default: ''
        }, {
            type: 'input',
            name: 'ThursdayTasks',
            message: 'What tasks must be performed on Thursday?',
            default: ''
        }, {
            type: 'input',
            name: 'FridayEvents',
            message: 'What events will take place on Friday?',
            default: ''
        }, {
            type: 'input',
            name: 'FridayTasks',
            message: 'What tasks must be performed on Friday?',
            default: ''
        }, {
            type: 'input',
            name: 'SaturdayEvents',
            message: 'What events will take place on Saturday?',
            default: ''
        }, {
            type: 'input',
            name: 'SaturdayTasks',
            message: 'What tasks must be performed on Saturday?',
            default: ''
        }, {
            type: 'input',
            name: 'SundayEvents',
            message: 'What events will take place on Sunday?',
            default: ''
        }, {
            type: 'input',
            name: 'SundayTasks',
            message: 'What tasks must be performed on Sunday?',
            default: ''
        }, ]).then((answers1) => {
            console.log(answers1);
            createWeek(answers1);
            promptUser();
        })
    }

    editPrompt = async() => {
        console.log("Edit Prompt Ran")
    }

    async function showPrompt() {

        console.log("Show Prompt Ran")
        await inquirer.prompt([{
                type: 'input',
                message: 'Select a schedule ID to be displayed',
                default: '',
                name: "weekID",
            }, ]).then(answers2 => {
                const weekID = answers2.weekID


                async function displayWeek(weekID) {
                    try {
                        const [week] = await Week.where("id").equals(weekID)
                        console.log("Your query result is " + week)
                        console.log(week.Monday)
                        console.table(week.Monday, ["Monday", "Events", "Tasks"])
                        console.table(week.Tuesday, ["Tuesday", "Events", "Tasks"])
                        console.table(week.Wednesday, ["Wednesday", "Events", "Tasks"])
                        console.table(week.Thursday, ["Thursday", "Events", "Tasks"])
                        console.table(week.Friday, ["Friday", "Events", "Tasks"])
                        console.table(week.Saturday, ["Saturday", "Events", "Tasks"])
                        console.table(week.Sunday, ["Sunday", "Events", "Tasks"])
                    } catch (error) {
                        console.log(error)
                    }
                }
                displayWeek(weekID);
            }),


            promptUser();
    }



    deletePrompt = async() => {
        console.log("Delete Prompt Ran")
    }

    async function createWeek(answers1) {
        try {
            // console.log("Line 125" + answers1)
            const newWeek = await Week.create({
                Monday: {
                    Events: [answers1.MondayEvents],
                    Tasks: [answers1.MondayTasks]
                },
                Tuesday: {
                    Events: [answers1.TuesdayEvents],
                    Tasks: [answers1.TuesdayTasks],
                },
                Wednesday: {
                    Events: [answers1.WednesdayEvents],
                    Tasks: [answers1.WednesdayTasks],
                },
                Thursday: {
                    Events: [answers1.ThursdayEvents],
                    Tasks: [answers1.ThursdayTasks],
                },
                Friday: {
                    Events: [answers1.FridayEvents],
                    Tasks: [answers1.FridayTasks],
                },
                Saturday: {
                    Events: [answers1.SaturdayEvents],
                    Tasks: [answers1.SaturdayTasks],
                },
                Sunday: {
                    Events: [answers1.SundayEvents],
                    Tasks: [answers1.SundayTasks],
                },
            })
            console.table([newWeek])
            console.log(newWeek)

        } catch (e) {
            console.log(e.message)

        }

    };
}
async function promptQuestions() {
    await promptUser();
}

promptQuestions();