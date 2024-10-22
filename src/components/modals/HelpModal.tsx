import React, { useState } from 'react';
import Image from 'next/image';

const HelpModal = ({ onClose }: { onClose: () => void }) => {
	const [page, setPage] = useState<number>(1);

	const totalPages = 10;

	const nextPage = () => {
		if (page < totalPages) {
			setPage(page + 1);
		} else {
			onClose();
		}
	};

	const prevPage = () => {
		if (page > 1) {
			setPage(page - 1);
		}
	};

	const renderPageContent = () => {
		switch (page) {
			case 1:
				return (
					<>
						<h2>Pathfinding Visualization Tool</h2>
						<p>
							This is a short tutorial on how to use this tool, if you prefer to just dive in, feel
							free to click &apos;Skip&apos;.
						</p>
						<p>
							Built with React, TypeScript and SCSS. If you would like to check out the project on
							GitHub then click the link below! All information on the pathfinding algorithms as
							well as the maze generation algorithms will have detailed desciptions in the README
							section.
						</p>
						<a
							href="https://github.com/spsokhi/pathfinding-visualizer"
							target="_blank"
							rel="noreferrer noopener"
						>
							Go To Project Repo
						</a>
						<Image
							src={'/tutorial/pathfindingdemogif.gif'}
							className="tutorial-gif"
							width={600}
							height={338}
							alt="live pathfinding gif"
						/>
					</>
				);
			case 2:
				return (
					<>
						<h2>Select a Pathfinding Algorithm</h2>
						<div style={{ width: '60ch', display: 'grid', placeItems: 'center' }}>
							<p>Choose your desired algorithm from the dropdown menu.</p>
						</div>
						<Image
							src={'/tutorial/selectalgorithmgif.gif'}
							className="tutorial-gif"
							width={800}
							height={450}
							alt="select algorithm gif"
						/>
					</>
				);
			case 3:
				return (
					<>
						<h2>Place Walls</h2>
						<p>
							Place walls down by holding down left click and remove them by holding right click.
						</p>
						<Image
							src={'/tutorial/placewallsgif.gif'}
							className="tutorial-gif"
							width={800}
							height={450}
							alt="placing and removing walls gif"
						/>
					</>
				);
			case 4:
				return (
					<>
						<h2>Generate a Maze/Pattern</h2>
						<p>Select a Maze/Pattern from the dropdown menu and watch it generate in realtime!</p>
						<Image
							src={'/tutorial/mazegengif.gif'}
							className="tutorial-gif"
							width={800}
							height={450}
							alt="generating maze gif"
						/>
					</>
				);
			case 5:
				return (
					<>
						<h2>Move Start And End Positions</h2>
						<p>
							Click and drag the start and end node blocks to a suited position before starting the
							algorithm!
						</p>
						<Image
							src={'/tutorial/movestartendgif.gif'}
							className="tutorial-gif"
							width={800}
							height={450}
							alt="move start or end nodes gif"
						/>
					</>
				);
			case 6:
				return (
					<>
						<h2>View Other Customizations</h2>
						<p>
							View other customizations such as changing grid size, maze generation speed and
							pathfinding speed.
						</p>
						<Image
							src={'/tutorial/othercustomizationsgif.gif'}
							className="tutorial-gif"
							width={800}
							height={450}
							alt="view other customizations gif"
						/>
					</>
				);
			case 7:
				return (
					<>
						<h2>Start Your Algorithm!</h2>
						<p>
							Once you have selected all your desired customizations, you are ready to click start
							and view the process!
						</p>
						<Image
							src={'/tutorial/viewalgorithmgif.gif'}
							className="tutorial-gif"
							width={800}
							height={450}
							alt="view live algorithm gif"
						/>
					</>
				);
			case 8:
				return (
					<>
						<h2>Viewing Other Potential Paths</h2>
						<p>
							Once the algorithm has finished running, you can drag the start or end blocks to
							instantly view different paths.
						</p>
						<Image
							src={'/tutorial/viewotherpathsgif.gif'}
							className="tutorial-gif"
							width={800}
							height={450}
							alt="view other pathfinding paths gif"
						/>
					</>
				);
			case 9:
				return (
					<>
						<h2>Reset</h2>
						<p>
							If you want to remove all visualization paths on the board, click &apos;Clear
							Paths&apos;. If you wan&apos;t the entire board to be cleared including walls, then
							click &apos;Reset&apos;.
						</p>
						<Image
							src={'/tutorial/resetgridgif.gif'}
							className="tutorial-gif"
							width={800}
							height={450}
							alt="reset grid gif"
						/>
					</>
				);
			case 10:
				return (
					<>
						<h2>Have Fun!</h2>
						<p>
							That&apos;s everything there is to it! Enjoy the tool and if you would like to view
							the source code on GitHub, here is the link again below.
						</p>
						<a
							href="https://github.com/spsokhi/pathfinding-visualizer"
							target="_blank"
							rel="noreferrer noopener"
						>
							Go To Project Repo
						</a>
						<Image
							src={'/tutorial/pathfindingdemogif.gif'}
							className="tutorial-gif"
							width={800}
							height={450}
							alt="live pathfinding gif"
						/>
					</>
				);
		}
	};

	return (
		<div className="help-modal-overlay">
			<div className="help-modal">
				<button id="help-modal-close-btn" onClick={onClose}>
					&times;
				</button>
				{renderPageContent()}
				<div className="page-counter">
					<p>
						{page} / {totalPages}
					</p>
				</div>

				<div className="buttons">
					<button id="skip-btn" onClick={onClose}>
						Skip
					</button>
					<div className="page-buttons">
						<button
							className="page-btn"
							style={{ visibility: `${page === 1 ? 'hidden' : 'visible'}` }}
							onClick={prevPage}
						>
							Previous
						</button>
						<button className="page-btn" onClick={nextPage}>
							{page < totalPages ? 'Next' : 'Begin!'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HelpModal;
