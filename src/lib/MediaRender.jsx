function MediaRenderer({ media }) {
	if (!media) return null; // iff tehre is no file

	const actualmediastyle =
		"rounded-md w-full max-h-[500px] object-contain border border-[#2A2A2A]";

	const MediaBoxStyle =
		"my-3 p-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg flex justify-center items-center";

	switch (media.type) {
		case "image":
			return (
				<div className={MediaBoxStyle}>
					<img
						src={media.url}
						alt="Post media"
						className={`${actualmediastyle} bg-[#0F0F0F]`}
					/>
				</div>
			);
		case "video":
			return (
				<div className={MediaBoxStyle}>
					<video
						src={media.url}
						controls
						className={`${actualmediastyle} bg-[#0F0F0F]`}
					/>
				</div>
			);
		case "audio":
			return (
				<div className={MediaBoxStyle}>
					<audio
						src={media.url}
						controls
						className="w-full"
						style={{
							backgroundColor: "#0F0F0F",
							color: "#C2B280", // sand tone for controls
						}}
					/>
				</div>
			);
		default:
			return (
				<div className={`${MediaBoxStyle} text-[#A1A1A1]`}>
					Unsupported media type
				</div>
			);
	}
}
export default MediaRenderer;
