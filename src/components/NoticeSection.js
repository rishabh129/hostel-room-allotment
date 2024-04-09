import React from "react";

const notices = [
  {
    title: "Consent form for Swap Room Request",
    fileUrl:
      "https://firebasestorage.googleapis.com/v0/b/hostelroomallocation-b14d9.appspot.com/o/documents%2Fswap_application.docx?alt=media&token=5cda723a-05f3-47f2-b6d8-1fff11e471a4", // Replace with the actual URL of your file
  },
  {
    title: "Format to Room Vacate Request permission",
    fileUrl: "https://firebasestorage.googleapis.com/v0/b/hostelroomallocation-b14d9.appspot.com/o/documents%2Fvacate_application.docx?alt=media&token=1b59ddcb-d3e7-4259-9ebe-3135519422cc", // Replace with the actual URL of your file
  },
  // Add more notices as needed
];

const NoticeSection = () => {
  return (
    <div className="noticeSection">
      <h1 className="NoticeHeading">Notice</h1>
      <ul className="menuItems">
        {notices.map((notice, index) => (
          <li key={index} className="menuItem">
            <a href={notice.fileUrl} className="menuItemLink" target="_blank" rel="noopener noreferrer">
              {notice.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticeSection;
