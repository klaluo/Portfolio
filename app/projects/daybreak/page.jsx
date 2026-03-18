"use client";

import daybreak from "../../../data/caseStudies/daybreak";
import CaseStudyPage from "../../../components/case-study/CaseStudyPage";
import styles from "../../../styles/caseStudy.module.css";

export default function DaybreakPage() {
    return <CaseStudyPage project={daybreak} styles={styles} />;
}
