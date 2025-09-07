// should only include like inputs and the menu the pop up logic is handled by the modal

function CommentMenu({ post }) {
	const postAni = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};
	return (
		<div>
			{post.commentObjects.map((e) => (
				<motion.div
					initial="hidden"
					animate="visible"
					key={e.id}
					variants={postAni}
					layout //  smooth re-sorting upon dom change
				>
					<span>test</span>
				</motion.div>
			))}
		</div>
	);
}

export default CommentMenu;
