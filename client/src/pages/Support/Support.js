import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { Box, Card, TextField } from "@mui/material";
import { BasicButton } from "../../components";

export default function SupportPage() {
	return (
		<Container bgcolor="primary.grey" sx={{ pt: "10vh" }}>
			<Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<Typography
					variant="h2"
					color="primary.verydark"
					sx={{ pt: 5, pb: 5 }}
					fontWeight={"bold"}
					alignSelf="center"
				>
					Support
				</Typography>

				<Container sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					padding: '50px'
				}}>
					<Card elevation={20} sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						textAlign: 'center',
						width: '100%',
						mb: '30px',
						padding: '30px',
					}}>
						<Typography variant="h3">How do we sign up?</Typography>
						<Box class="faq-answer">
							<Typography variant="p">
								Follow the instructions in the pricing
								page. Contact our team if you are having
								difficulties.
							</Typography>
						</Box>
					</Card>

					<Card elevation={20} sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						textAlign: 'center',
						width: '100%',
						mb: '30px',
						padding: '30px',
					}}>
						<Typography variant="h3">Where can we find the QR codes?</Typography>
						<Box class="faq-answer">
							<Typography variant="p">
								{" "}
								Once you created your menu, you will be
								given a button to get a printable PDF of
								QR codes for your menu. After printing
								the QR codes, simply scan them and you
								will be redirected to your menu as an
								interactive web page.
							</Typography>
						</Box>
					</Card>


					<Card elevation={20} sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						textAlign: 'center',
						width: '100%',
						mb: '30px',
						padding: '30px',
					}}>
						<Typography variant="h3"> What do we need to start?</Typography>
						<Box class="faq-answer">
							<Typography variant="p">
								All you need to start are the menu items
								and their pictures. The rest we will
								walk you through in the interactive web
								menu builder.
							</Typography>
						</Box>
					</Card>
				</Container>

				<Container sx={{ width: "100%", alignSelf: 'center' }}>
					<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
						<Typography variant="h2" alignSelf="center" sx={{ pb: '5vh' }}
						>Contact Us</Typography>
						<TextField
							label="name"
							sx={{ width: { xs: "50vw", md: "40vw", lg: "30vw" }, pb: "2vh", }}
						/>
						<TextField
							label="email"
							sx={{ width: { xs: "50vw", md: "40vw", lg: "30vw" }, pb: "2vh", pr: "2vw" }}
						/>
						<TextField
							label="subject"
							sx={{ width: { xs: "50vw", md: "40vw", lg: "30vw" }, pb: "2vh", pr: "2vw" }}
						/>
						<TextField
							label="message"
							sx={{ width: { xs: "50vw", md: "40vw", lg: "30vw" }, pr: "2vw" }}
						/>
						<BasicButton
							alignSelf="center"
							style={{ textAlign: "center", alignSelf: 'center' }}
							sx={{
								display: "block",
							}}
							text="SEND"
							color="primary.verydark"
							size="40"
							marginY='3'
						/>
					</Box>
				</Container>
			</Container>
		</Container >
	);
}
