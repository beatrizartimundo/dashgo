import { Flex, Box, Text, Avatar } from '@chakra-ui/react'
interface ProfileProps {
    showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData &&
                (<Box mr="4" textAlign="right">
                    <Text>Beatriz Artimundo</Text>
                    <Text
                        color="gray.300"
                        fontSize="small"
                    >
                        beatriz@email.com
                    </Text>
                </Box>)
            }
            <Avatar size="md" name="Beatriz Artimundo" src="" />
        </Flex>
    )
}