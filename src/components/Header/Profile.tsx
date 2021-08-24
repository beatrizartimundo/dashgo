import {Flex, Box, Text, Avatar} from '@chakra-ui/react'

export function Profile() {
    return(
        <Flex align="center">
        <Box mr="4" textAlign="right">
            <Text>Beatriz Artimundo</Text>
            <Text
                color="gray.300"
                fontSize="small"
            >
                beatriz@email.com
            </Text>
        </Box>
        <Avatar size="md" name="Beatriz Artimundo" src="" />
    </Flex>
    )
}