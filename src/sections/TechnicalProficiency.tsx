"use client";

import { useState } from "react";
import { TECHNICAL_PROFICIENCY } from "../utils/data";
import Tabs from "@/components/Tabs";
import SkillCard from "@/components/SkillCard";

function TechnicalProficiency() {
    const [tabData, setTabData] = useState(TECHNICAL_PROFICIENCY.skills);
    const [activeTab, setActiveTab] = useState("all");

    const handleTabValueChange = (value: string) => {
        if (value === "all") {
            setTabData(TECHNICAL_PROFICIENCY.skills);
            setActiveTab("all");
            return;
        }

        const filteredData = TECHNICAL_PROFICIENCY.skills.filter(
            (skill) => skill.type === value
        );
        setTabData(filteredData);
        setActiveTab(value);
    };

    return (
        <section id="skills" className="bg-background mt-20">
            <div className="container mx-auto p-10">
                <div className="w-full lg:w-[60vw] mx-auto">
                    <h2 className="section-title">
                        {TECHNICAL_PROFICIENCY.title}
                    </h2>

                    <p className="text-sm text-center mt-4 leading-6">
                        {TECHNICAL_PROFICIENCY.description}
                    </p>
                </div>

                <Tabs
                    tabList={TECHNICAL_PROFICIENCY.tabs}
                    activeTab={activeTab}
                    onChange={handleTabValueChange}
                />

                <div
                    id="skill-tabpanel"
                    role="tabpanel"
                    aria-labelledby={`skill-tab-${activeTab}`}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-107.5"
                >
                    {tabData.map((skill, index) => (
                        <div
                            key={`${activeTab}-${skill.id}`}
                            className="card-reveal"
                            style={{ animationDelay: `${index * 60}ms` }}
                        >
                            <SkillCard
                                icon={
                                    <skill.icon className="w-6 h-6 text-primary" />
                                }
                                skillName={skill.skill}
                                description={skill.description}
                                progress={skill.progress}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechnicalProficiency;
