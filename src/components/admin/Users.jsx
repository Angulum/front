import { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import { Button, Spinner } from "@material-tailwind/react";
import { useBlockUI } from "../../lib/context/useBlockUI";

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    role: "",
  });

  const { blockUI, unblockUI } = useBlockUI();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/user/get`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditForm({ name: user.name, email: user.email, role: user.role });
    setIsEditModalOpen(true);
  };

  const handleDelete = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const saveEdit = async () => {
    try {
      blockUI("Guardando cambios...");
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/edit/${selectedUser.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },

          body: JSON.stringify(editForm),
        }
      );

      if (response.ok) {
        const updatedUser = await response.json();
        setUsers(
          //find user and change with the edit form data
          users.map((user) => (user.id === updatedUser.id ? editForm : user))
        );
        closeModal();
      } else {
        console.error("Error updating user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
    unblockUI();
  };

  const deleteUser = async () => {
    try {
      blockUI("Borrando usuario...");
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/id/${selectedUser.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        setUsers(users.filter((user) => user.id !== selectedUser.id));
        closeModal();
      } else {
        console.error("Error deleting user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
    unblockUI();
  };

  return (
    <div className="container mx-auto max-w-4xl mt-12">
      <h2 className="font-bold text-2xl">Usuarios</h2>
      <p className="mt-2 text-[#575757]">
        Aquí puedes ver y administrar los usuarios de la plataforma.
      </p>
      <div className="mt-8">
        {loading ? (
          <div className="w-full flex justify-center items-center">
            <Spinner color="blue" size="large" />
          </div>
        ) : (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Nombre</th>
                <th className="py-2">Email</th>
                <th className="py-2">Rol</th>
                <th className="py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                if (user.role === "ADMIN") {
                  return null;
                }

                return (
                  <tr key={user.id}>
                    <td className="py-2">{user.name}</td>
                    <td className="py-2">{user.email}</td>
                    <td className="py-2">{user.role}</td>
                    <td className="py-2">
                      <Button onClick={() => handleEdit(user)}>Editar</Button>
                      <Button onClick={() => handleDelete(user)}>Borrar</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {isEditModalOpen && (
        <Modal onClose={closeModal}>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Editar usuario</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1">
                <label>Nombre:</label>
                <input
                  type="text"
                  className="border border-black/10 rounded-lg p-2"
                  name="name"
                  value={editForm.name}
                  onChange={handleEditChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={editForm.email}
                  onChange={handleEditChange}
                  className="border border-black/10 rounded-lg p-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Rol:</label>
                <input
                  type="text"
                  name="role"
                  value={editForm.role}
                  onChange={handleEditChange}
                  className="border border-black/10 rounded-lg p-2"
                />
              </div>
              <div className="flex justify-end gap-2 mt-3">
                <Button onClick={saveEdit}>Guardar</Button>
                <Button onClick={closeModal}>Cerrar</Button>
              </div>
            </form>
          </div>
        </Modal>
      )}

      {isDeleteModalOpen && (
        <Modal onClose={closeModal}>
          <h2>Borrar Usuario</h2>
          <p>¿Estás seguro de que deseas borrar a {selectedUser?.name}?</p>
          <Button onClick={closeModal}>Cancelar</Button>
          <Button onClick={deleteUser}>Borrar</Button>
        </Modal>
      )}
    </div>
  );
};

export default Users;
