"use client";

import gotit from "../../../data/caseStudies/gotit";
import CaseStudyPage from "../../../components/case-study/CaseStudyPage";
import styles from "./gotit.module.css";

export default function GotItPage() {
    return <CaseStudyPage project={gotit} styles={styles} />;
}
