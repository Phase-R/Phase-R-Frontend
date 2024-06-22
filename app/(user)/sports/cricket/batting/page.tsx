"use client"

import React from "react";
import PageHeader from "@/app/(user)/PageHeader";
import SubSubPageSection from "../SubSubPageSection";
import { useState } from "react";

const data = [{
    Dropdowntext: "Drills for Balance",
    content: [{
        Dropdowntext: "Static Balance Drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    },
    {
        Dropdowntext: "One Leg Balance drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    },
    {
        Dropdowntext: "Narrow Stance drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    },
    {
        Dropdowntext: "Dynamic Balance drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    },
    {
        Dropdowntext: "Weight Transfer drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    }]
},
{
    Dropdowntext: "Drills for Timing",
    content: [{
        Dropdowntext: "Shadow Batting",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    },
    {
        Dropdowntext: "Reaction Drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    },
    {
        Dropdowntext: "Ball Toss Drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    },
    {
        Dropdowntext: "Target Practice",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    },
    {
        Dropdowntext: "Visualization Drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    }]
},
{
    Dropdowntext: "Drills for Front Foot Movement",
    content: [{
        Dropdowntext: "Cone drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    },
    {
        Dropdowntext: "Stump to Stump drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    },
    {
        Dropdowntext: "Weight Transfer drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    },
    {
        Dropdowntext: "Resistance Band drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    }]
},
{
    Dropdowntext: "Drills for Back Foot Movement",
    content: [{
        Dropdowntext: "Cone drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    },
    {
        Dropdowntext: "Hanging Ball drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    },
    {
        Dropdowntext: "Backfoot Drive drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    },
    {
        Dropdowntext: "Reaction drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    }]
},
{
    Dropdowntext: "Drills for Batswing",
    content: [{
        Dropdowntext: "Quick Hands drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    },
    {
        Dropdowntext: "Short Ball drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    },
    {
        Dropdowntext: "One Handed drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    },
    {
        Dropdowntext: "Rhythm drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    },
    {
        Dropdowntext: "Mirror drill",
        content: {
            videoUrl: "/sports_page/example_vid.mp4",
            innerContent: "Just learning how to balance while batting static (I made this shit up for now)"
        }
    }]
}]

export default function Batting() {
    return(
        <div>
            <PageHeader headerHeading="batting" headerDesc="Cricket is a very old game which requires the utmost of wits, tenacity and discipline combined with a high skill level either with the bat, ball or both" bgImage={'/sports_page/batting_page_bg.png'} headerColor="bg-button-greenp" headerSubtextArray={["Balance", "Timing", "Movement"]} />

            <div className="mt-20 m-4">
                <SubSubPageSection {...data[0]} />
                <SubSubPageSection {...data[1]} />
                <SubSubPageSection {...data[2]} />
                <SubSubPageSection {...data[3]} />
                <SubSubPageSection {...data[4]} />
            </div>
        </div>
    )
}
