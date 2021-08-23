import { Box, Flex , Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text } from "@chakra-ui/react";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";

export default function UserList() {
    return (
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal" >Usuários</Heading>
                        <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="pink"
                        leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                        >
                            Criar novo
                        </Button>
                    </Flex>
                <Table colorScheme="whiteAlpha">
                    <Thead>
                        <Tr>
                            <Th px="6" color="gray.300" width="8">
                                <Checkbox colorScheme="pink" />

                            </Th>
                            <Th>
                                Usuário
                            </Th>
                            <Th>Data de Cadastro</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td px="6">
                                <Checkbox colorScheme="pink"/>
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight="bold">Beatriz Artimundo</Text>
                                    <Text fontSize="sm" color="gray.300">beatriz@email.com</Text>
                                </Box>
                            </Td>
                            <Td>
                                20 de agosto de 2021
                            </Td>
                            <Td>

                                <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiPencilLine}/>}
                                >
                                Criar novo
                            </Button>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
                <Pagination/>
                </Box>
            </Flex>

        </Box>
    )
}