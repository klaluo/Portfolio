"use client";

import daybreak from "../../../data/caseStudies/daybreak";
import CaseStudyPage from "../../../components/case-study/CaseStudyPage";
import styles from "./daybreak.module.css";

export default function DaybreakPage() {
    return <CaseStudyPage project={daybreak} styles={styles} />;
}
