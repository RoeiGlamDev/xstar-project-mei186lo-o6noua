import React from 'react';
import { motion } from 'framer-motion';

interface StatsSectionProps {
    achievements: {
        title: string;
        value: number;
    }[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ achievements }) => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-orange-600 mb-10">GlamCS Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-2xl font-semibold text-orange-600">{achievement.title}</h3>
                            <motion.div
                                className="text-6xl font-bold text-orange-500 mt-4"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                {achievement.value.toLocaleString()}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;