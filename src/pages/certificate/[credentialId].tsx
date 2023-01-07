import { useEffect, useState } from 'react';

import { jsPDF as JsPDF, RGBAData } from 'jspdf';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import QRCode from 'qrcode';
import { pdfjs, Document, Page } from 'react-pdf';

import { useWindowDimensions } from '../../components/hooks/useWindowDimension';
import {
  Certificate,
  getCertificate,
  getCertificateParams,
} from '../../data/certificate';

import '../../../public/assets/font/Poppins-bold';
import '../../../public/assets/font/Poppins-Medium-normal';
import '../../../public/assets/font/Poppins-Regular-normal';
import '../../../public/assets/font/Poppins-SemiBold-bold';

const earnTranslator = {
  A: 'Advanced Satisfactory',
  'B+': 'Upper Intermediate',
  B: 'Intermediate ',
  'B-': 'Early Intermediate',
  C: 'Beginner',
};

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function PDF({
  certificateData,
}: {
  certificateData: Certificate;
}) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  const [pdf, setPdf] = useState('');
  const [pdfDoc, setPdfDoc] = useState<JsPDF>();
  const { width: pageWidth } = useWindowDimensions();

  let QrImage:
    | string
    | HTMLCanvasElement
    | HTMLImageElement
    | Uint8Array
    | RGBAData;
  const router = useRouter();
  const currentUrl = router.asPath;
  const CredentialLink = `https://qarirlabs.com${currentUrl}`;

  function CreatePdf() {
    const Doc = new JsPDF({
      orientation: 'landscape',
      unit: 'pt',
      format: 'a4',
    });
    const studentName = certificateData.name;
    const programName = certificateData.program;
    const earn = `Earned ${earnTranslator[certificateData.score]} Level`;
    const time = `${monthNames[certificateData.month - 1]} ${
      certificateData.year
    }`;
    const { credentialId } = certificateData;
    Doc.addImage(
      '../../assets/images/certificate/template-certificate.jpg',
      'jpeg',
      0,
      0,
      842,
      595,
      '',
      'NONE',
      0
    );
    Doc.setFont('Poppins', '', '700');
    Doc.setFontSize(34);
    Doc.setTextColor('#0b5693');
    Doc.text(studentName!, 421, 235, { align: 'center' });
    Doc.setFont('Poppins-SemiBold', 'bold', '');
    Doc.setFontSize(26);
    Doc.text(programName!, 421, 315, { align: 'center' });
    Doc.setFont('Poppins-Medium', 'normal', '');
    Doc.setFontSize(16);
    Doc.text(earn!, 421, 345, { align: 'center' });
    Doc.setFont('Poppins-Regular', 'normal', '');
    Doc.setFontSize(14);
    Doc.text(time!, 421, 370, { align: 'center' });
    Doc.setTextColor('#FFFFFF');
    Doc.setFontSize(10);
    Doc.text('Credential ID', 30, 515);
    Doc.text(credentialId!, 30, 527);
    Doc.text('Verify Certificate', 30, 547);
    Doc.text(CredentialLink!, 30, 559);
    const CredentialLinkWidth = Doc.getTextWidth(CredentialLink!);
    Doc.link(30, 550, CredentialLinkWidth, 10, { url: CredentialLink });
    Doc.addImage(QrImage, 30, 420, 70, 70);
    setPdf(Doc.output('datauristring'));
    setPdfDoc(Doc);
  }

  useEffect(() => {
    QRCode.toDataURL(CredentialLink, { margin: 0 }, (_err, url) => {
      QrImage = url;
      CreatePdf();
    });
  }, []);

  function getPageWith() {
    if (!pageWidth) return undefined;
    return pageWidth < 841 ? (pageWidth * 90) / 100 : 841;
  }

  return (
    <div className="py-28 flex m-auto justify-center bg-blue-50">
      <Document file={pdf} className="m-0" noData="Loading your certificate...">
        <Page pageNumber={1} width={getPageWith()} />

        <button
          className="mt-4 px-7 py-3.5 text-center text-xs rounded-full text-white bg-blue-800 hover:bg-blue-500"
          onClick={() => {
            pdfDoc?.save(certificateData.credentialId);
          }}
        >
          Download
        </button>
      </Document>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getCertificateParams();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const certificateData = getCertificate(context);
  return {
    props: {
      certificateData,
    },
  };
};

PDF.withoutFooter = true;
