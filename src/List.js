import React, { Component } from 'react';
export class List extends Component{
    constructor()
    {
        super();
        this.state={
            data:[{
                id : 1,
                name : "Bigthink.com",
                title: "Space miners race to an asteroid worth quintillions",
                description : "16 Psyche is an asteroid full of metal in the asteroid belt that could be worth $700 quintillion. NASA plans to visit 16 Psyche by 2026. Commercial mining of faraway asteroids could still be decades away and some set closer targets, like the moon. None Would …",
            },
            {
                id : 2,
                name : "Bigthink.com",
                title: "Space miners race to an asteroid worth quintillions",
                description : "16 Psyche is an asteroid full of metal in the asteroid belt that could be worth $700 quintillion. NASA plans to visit 16 Psyche by 2026. Commercial mining of faraway asteroids could still be decades away and some set closer targets, like the moon. None Would …",

            },
            {
                id : 3,
                name : "Bigthink.com",
                title: "Space miners race to an asteroid worth quintillions",
                description : "16 Psyche is an asteroid full of metal in the asteroid belt that could be worth $700 quintillion. NASA plans to visit 16 Psyche by 2026. Commercial mining of faraway asteroids could still be decades away and some set closer targets, like the moon. None Would …",
            }
            ]
        }
    }
    
    render() {
        return(
            <div>
                {
                    this.state.data.map((dynamicData,i) =>
                    
                        <div>
                        <p>{dynamicData.id}</p>
                        <div >{dynamicData.name}</div>
                        <p>{dynamicData.title}</p>
                        <p>{dynamicData.description}</p>
                    </div>
                    
                    )
                }
            </div>

        )
    }

}
