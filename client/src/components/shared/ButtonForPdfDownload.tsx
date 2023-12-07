type ButtonForPdfDowloadProps = {
	content: string;
	filePath: string;
};
const ButtonForPdfDownload = ({ content, filePath }: ButtonForPdfDowloadProps) => {
	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = filePath;
		const pathParts: string[] = filePath.split('/');
		const fileNameWithExtension: string = pathParts[pathParts.length - 1];
		const fileNameParts = fileNameWithExtension.split('.');
		const fileName = fileNameParts[0];
		link.download = `${fileName}.pdf`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<button className='custom-button' onClick={handleDownload}>
			{content}
		</button>
	);
};

export default ButtonForPdfDownload;
