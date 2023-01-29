import React from "react";
import { FunctionComponent } from "react";
import styles from "./FileUploadArea.module.css";
import logo from "../../assets/uploadicon.jpg"

const FileUploadArea: FunctionComponent = () => {
  return (
    <div className={styles.fileUploadArea}>
      <input className={styles.uploadFileBackground} type="file" required />
      <div className={styles.dragDropFiles}>
        <b className={styles.dragDropContainer}>
          <span className={styles.dragDrop}>{`Drag & drop files or`}</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.browse}>Browse</span>
        </b>
      </div>
      <div className={styles.supportedFormats}>
        <div className={styles.supportedFormatesJpeg}>
          Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
        </div>
      </div>
      <img className={styles.uploadIcon} alt="" src={logo} />
    </div>
  );
};

export default FileUploadArea;
