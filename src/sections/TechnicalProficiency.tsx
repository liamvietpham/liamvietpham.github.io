"use client";

import { useState } from "react";
import { TECHNICAL_PROFICIENCY } from "../utils/data";
import { motion } from "framer-motion";
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
                    <h4 className="section-title">
                        {TECHNICAL_PROFICIENCY.title}
                    </h4>

                    <p className="text-sm text-center mt-4 leading-6">
                        {TECHNICAL_PROFICIENCY.description}
                    </p>
                </div>

                <Tabs
                    tabList={TECHNICAL_PROFICIENCY.tabs}
                    activeTab={activeTab}
                    onChange={handleTabValueChange}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px]">
                    {tabData.map((skill, index) => (
                        <motion.div
                            key={`${activeTab}-${skill.id}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <SkillCard
                                icon={
                                    <skill.icon className="w-6 h-6 text-primary" />
                                }
                                skillName={skill.skill}
                                description={skill.description}
                                progress={skill.progress}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechnicalProficiency;
