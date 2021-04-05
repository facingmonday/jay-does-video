import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const qanda = [
  {
    question: "How do I get ahold of Jay?",
    answer: "The best way to get ahold of me is by direct messaging me on Instagram or TikTok. Both are under @jaydoesvideo."
  },
  {
    question: "What type of projects do you take?",
    answer: ""
  },
  {
    question: "What is your prefered gear?",
    answer: "I'm a Sony shooter when it comes to video. My go to camera is a Sony FX3 with a G Master 24-72, Atomos V external recorder and Zhiyun Crane gimbal. For photography, my goto is a Canon 6D with a Sigma Art 18-35."
  },
  {
    question: "How much do you cost?",
    answer: "Depends on the project. Even a simple music video can be complicated. It depends a lot on where the shoot is going to take place, how much gear I have to bring, and then how much time I'm gonna spend editing. To put it into perspective, a wedding usually has a 2 hour travel time, 12 hours of shooting, and takes 80 hours of editing."
  },
  {
    question: "Who are your influences",
    answer: "David Fincher, Guy Richie, Christopher Nolan, and Quentin Tarantino to name a couple classic directors. Robert Edgars and Ari Aster are a couple of my new favorite directors. And who could forget Edgar Wright. As for screen plays, the Coen brothers, "
  },
];
const FaqContent = () => {
    return (
        <div className="faq-area ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="top-title">FAQ</span>
					<h2>Frequently Asked Questions</h2>
				</div>

				<div className="faq-accordion">
          <Accordion allowZeroExpanded preExpanded={['a']}>
            {
              qanda.map(({ question, answer }, i) => (
                <AccordionItem uuid={i}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {question}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>{answer}</p>
                    </AccordionItemPanel>
                </AccordionItem>
              ))
            }
          </Accordion>
				</div>
			</div>
		</div>
  )
}

export default FaqContent;