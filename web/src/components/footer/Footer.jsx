import styles from "./Footer.style";
import { Twitter, Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import wocimage from "res/img/woclogo.jpg";

const Footer = () => {
    const classes = styles();

    const address = "Level 9/123 Epping Rd, Macquarie Park, NSW, 2113";
    const phone = "+612 8875 7823";
    const email = "hello@womenofcolour.org.au";


    return (
        <>
            <div className={classes.contactInformationDiv}>
                <div className={classes.contactInformation}>
                    <div className={classes.informationTitle}>
                        Contact Information:
                    </div>
                    <div className={classes.information}>
                        <p>
                            Address: {address}
                            <br/>
                            Phone: {phone}
                            <br/>
                            Email: {email} 
                        </p>
                    </div>
                </div>
                <div className={classes.socialMediaDiv}>
                    <div className={classes.socialMediaTitle}>
                        <p>
                            Follow us on
                        </p>
                    </div>
                    <div div className={classes.socialMediaIcons}>
                        <a href="https://www.facebook.com/WomenofColourAU" target="_blank" rel="noreferrer"><Facebook className={classes.socialMediaIcon}/></a>
                        <a href="https://www.linkedin.com/company/womenofcolourltd" target="_blank" rel="noreferrer"><LinkedIn className={classes.socialMediaIcon}/></a>
                        <a href="https://twitter.com/WomenofColourAU" target="_blank" rel="noreferrer"><Twitter className={classes.socialMediaIcon}/></a>
                        <a href="https://www.instagram.com/womenofcolourau/" target="_blank" rel="noreferrer"><Instagram className={classes.socialMediaIcon}/></a>
                    </div>
                </div>
            </div>
            <div className={classes.definitionContainer}>
                <div className={classes.definitionDiv}>
                    <div className={classes.block}>
                        <p>
                            <img className={classes.wocimage} src={wocimage} alt="women of colour"></img>
                            <br />
                            We exist to champion Australia’s Women of Colour.
                        </p>
                    </div>
                    <div className={classes.block}>
                        <h3 className={classes.title}>The Origin of the phrase “Women of Color”</h3>
                        <div>
                        "Women of Color is not a biological designation. It is a solidarity definition. 
                        A commitment to work in collaboration with other oppressed women of color who have 
                        been minoritized. It is a term that has a lot of power." <a href="https://www.lorettaross.com/" target="_blank" rel="noreferrer" className={classes.link}>Loretta Ross</a>
                        <br />
                        <a href="https://womenofcolour.org.au/the-origin-of-the-phrase-women-of-color/" target="_blank" rel="noreferrer" className={classes.link}>Learn more here</a>
                        </div>
                    </div>
                    <div className={classes.block}>
                        <h3 className={classes.title}>Women Definition</h3>
                        <div>
                            Women - Transgender and cisgender, all those who experience or have experienced oppression as women, 
                            including non-binary and gender non-conforming people and all those who identify as women. Self-definition 
                            is at the discretion of the individual.
                            <br />
                            <a href="https://www.wire.org.au/tgd-policy/" target="_blank" rel="noreferrer" className={classes.link}>Definition credit: wire.org.au</a>
                        </div>
                    </div>
                    <div className={classes.block}>
                        <h3 className={classes.title}>ALLY Definition</h3>
                        <div>
                            A - always centre the impacted
                            <br />
                            L - listen and learn from those who live in oppression
                            <br />
                            L - leverage your privilege
                            <br />
                            Y - yield the floor
                            <br />
                            *Mnemonic credit: Kayla Reed Executive Director <a href="https://actionstl.org/" target="_blank" rel="noreferrer" className={classes.link}>ACTION St. Louis</a>
                            <br />
                            Follow Kayla Reed on Twitter <a href="https://twitter.com/iKaylaReed/" target="_blank" rel="noreferrer" className={classes.link}>@iKaylaReed</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.copyright}>
                <p className={classes.paragraph}>
                    <a className={classes.linkCopyright} href="https://womenofcolour.org.au/privacy-policy" >Privacy Policy</a>
                    <a className={classes.linkCopyright} href="https://womenofcolour.org.au/refund-policy/">Refund Policy</a>
                    <a className={classes.linkCopyright} href="https://womenofcolour.org.au/terms-of-use/">Terms Of Use</a>
                </p>
                <p className={classes.paragraph}>
                    WOMEN OF COLOUR LTD  ACN  643 518 576 ABN 17 643 518 576  is an 
                    <a className={classes.link} href="https://www.abr.business.gov.au/ABN/View?abn=17643518576"> Australian Public Company Limited by Guarantee</a>.
                    We are a <a className={classes.link} href="https://www.acnc.gov.au/charity/62f294418879c383b267fa2ab7952c5a#overview">registered charity</a> 
                    with the Australian Charities and Not-for-profits Commission (ACNC).
                </p>
                <p className={classes.paragraph}>
                    Women Of Colour Ltd Copyright 2021 All Rights Reserved
                </p>
                <p className={classes.paragraph}>
                    <i>
                    We acknowledge the Wallumattagal clan of the Darug nation as the Traditional Custodians of the land upon which Women of Colour Australia is situated. 
                    We pay our respects to their Elders past and present. We acknowledge and honour the strength and resilience of Aboriginal and Torres Strait Islander 
                    women with whom we stand in solidarity. We acknowledge that as settlers on this stolen Aboriginal land, we are beneficiaries of the dispossession, 
                    genocide, and ongoing colonial violence against Aboriginal and Torres Strait Islander peoples. We believe that it is our collective responsibility to 
                    help dismantle the structural inequities and systemic barriers oppressing the original inhabitants of this land. 
                    This land is and always will be Aboriginal land. Sovereignty was never ceded.
                    </i>
                </p>
            </div>
        </>
    )
}

export default Footer;