"use client";

import gotit from "../../../data/caseStudies/gotit";
import CaseStudyPage from "../../../components/case-study/CaseStudyPage";
import styles from "../../../styles/caseStudy.module.css";

export default function GotItPage() {
    return <CaseStudyPage project={gotit} styles={styles} />;
}
