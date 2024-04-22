import { Box, Button, Container, Heading, Image, Text, VStack, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaSun, FaWind, FaLanguage, FaPlus } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const [language, setLanguage] = useState("EN");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const translations = {
    EN: {
      title: "Welcome to EcoEnergy Solutions",
      description: "Leading provider of sustainable energy installations, including solar panels and wind turbines.",
      solarEnergy: "Solar Energy",
      windEnergy: "Wind Energy",
      learnMore: "Learn More",
    },
    IT: {
      title: "Benvenuti in EcoEnergy Solutions",
      description: "Fornitore leader di installazioni di energia sostenibile, inclusi pannelli solari e turbine eoliche.",
      solarEnergy: "Energia Solare",
      windEnergy: "Energia Eolica",
      learnMore: "Scopri di più",
    },
    FR: {
      title: "Bienvenue chez EcoEnergy Solutions",
      description: "Fournisseur leader d'installations d'énergie durable, y compris des panneaux solaires et des éoliennes.",
      solarEnergy: "Énergie Solaire",
      windEnergy: "Énergie Éolienne",
      learnMore: "En savoir plus",
    },
  };

  const currentLang = translations[language];

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Box p={5} bg={formBackground} borderRadius="md" boxShadow="md">
          <Heading mb={4}>{currentLang.title}</Heading>
          <Text fontSize="lg">{currentLang.description}</Text>
          <Button rightIcon={<FaLanguage />} mt={4} onClick={toggleColorMode}>
            {language === "EN" ? "Switch Theme" : language === "IT" ? "Cambia Tema" : "Changer le Thème"}
          </Button>
          <IconButton aria-label="Italian" icon={<FaLanguage />} isRound m={1} onClick={() => handleLanguageChange("IT")} />
          <IconButton aria-label="English" icon={<FaLanguage />} isRound m={1} onClick={() => handleLanguageChange("EN")} />
          <IconButton aria-label="French" icon={<FaLanguage />} isRound m={1} onClick={() => handleLanguageChange("FR")} />
        </Box>
        <Box p={5} bg={formBackground} borderRadius="md" boxShadow="md">
          <Heading mb={4}>{currentLang.solarEnergy}</Heading>
          <Image src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsc3xlbnwwfHx8fDE3MTM3Mjk4MDV8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Button rightIcon={<FaPlus />} mt={4}>
            {currentLang.learnMore}
          </Button>
        </Box>
        <Box p={5} bg={formBackground} borderRadius="md" boxShadow="md">
          <Heading mb={4}>{currentLang.windEnergy}</Heading>
          <Image src="https://images.unsplash.com/photo-1548337138-e87d889cc369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZXN8ZW58MHx8fHwxNzEzNzkwNzE4fDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Button rightIcon={<FaPlus />} mt={4}>
            {currentLang.learnMore}
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
