import React, { useState, useEffect, useRef } from "react";
import Globalstyles from "../../styles/globalstyles";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Pencil, ShieldCheck, UserRound } from "lucide-react";
import imageCompression from "browser-image-compression";

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 3rem;
  box-sizing: border-box;
`;

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  position: relative;
  gap: 1.5rem;
`;

const AvatarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Avatar = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: #555;
  background-image: ${(props) => (props.src ? `url(${props.src})` : "none")};
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 25px rgba(127, 90, 240, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const AvatarHint = styled.div`
  font-size: 0.8rem;
  color: #aaa;
  text-align: center;
`;

const Username = styled.h1`
  font-size: 1.5rem;
  margin: 0.2rem 0 0 0;
  text-align: left;
`;

const UserBadge = styled.div`
  font-size: 0.9rem;
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ccc;
  font-weight: 500;
  height: fit-content;
`;

const DescriptionBox = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  position: relative;
  font-size: 1.1rem;
  color: #ccc;
  min-height: 180px;
  width: 100%;
  max-width: 600px;
`;

const EditIcon = styled(Pencil)`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 20px;
  height: 20px;
  color: #bbb;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

const DescriptionInput = styled.textarea`
  background: transparent;
  border: none;
  width: 100%;
  height: 100%;
  resize: none;
  font-size: 1.1rem;
  color: white;
  font-family: inherit;
  outline: none;
`;

const HiddenInput = styled.input`
  display: none;
`;

const UserWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  text-align: right;
  cursor: pointer;
  z-index: 10;
`;

const UserDisplay = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  background-color: rgba(255, 255, 255, 0.08);
  padding: 0.5rem 1rem;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(184, 132, 255, 0.3);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const Dropdown = styled.div`
  margin-top: 0.3rem;
  background: #222;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: white;
  font-size: 0.95rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  text-align: center;

  &:hover {
    background-color: #333;
  }
`;

function Perfil() {
  const name = localStorage.getItem("userName");
  const userType = localStorage.getItem("userType") || "user";
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [description, setDescription] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [editingDesc, setEditingDesc] = useState(false);
  const fileInputRef = useRef();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/users/profile?name=${name}`);
        setDescription(response.data.description || "");

        const avatarRes = await axios.get(`http://localhost:3000/api/users/avatar/${name}`);
        const base64Image = avatarRes.data.image;
        if (base64Image) {
          setAvatarUrl(`data:image/png;base64,${base64Image}`);
        }
      } catch (err) {
        console.error("Erro ao buscar perfil:", err);
      }
    };

    if (name) fetchUserData();
  }, [name]);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userType");
    navigate("/login");
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1024,
          useWebWorker: true,
        };

        const compressedFile = await imageCompression(file, options);

        const formData = new FormData();
        formData.append("name", name);
        formData.append("avatar", compressedFile);

        await axios.put("http://localhost:3000/api/users/update-avatar", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        const localUrl = URL.createObjectURL(compressedFile);
        setAvatarUrl(localUrl);
      } catch (error) {
        console.error("Erro ao salvar avatar:", error);
      }
    }
  };

  const handleDescriptionSave = async (newDesc) => {
    try {
      await axios.put("http://localhost:3000/api/users/update-description", {
        name,
        description: newDesc,
      });
    } catch (err) {
      console.error("Erro ao salvar descrição:", err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      setEditingDesc(false);
      handleDescriptionSave(description);
    }
  };

  return (
    <>
      <Globalstyles />
      <Container>
        {name && (
          <UserWrapper onClick={toggleDropdown}>
            <UserDisplay>Olá, {name}</UserDisplay>
            {showDropdown && <Dropdown onClick={handleLogout}>Logout</Dropdown>}
          </UserWrapper>
        )}

        <ProfileCard>
          <AvatarRow>
            <AvatarWrapper>
              <Avatar src={avatarUrl || undefined} onClick={handleAvatarClick} />
              <AvatarHint>Clique para mudar foto</AvatarHint>
              <HiddenInput
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleAvatarChange}
              />
            </AvatarWrapper>
            <UserBadge>
              {userType === "advogado" ? <ShieldCheck size={16} /> : <UserRound size={16} />}
              {userType === "advogado" ? "Conta Advogado" : "Conta Usuário"}
            </UserBadge>
          </AvatarRow>

          <Username>{name}</Username>

          <DescriptionBox>
            {editingDesc ? (
              <DescriptionInput
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onBlur={() => {
                  setEditingDesc(false);
                  handleDescriptionSave(description);
                }}
                onKeyDown={handleKeyDown}
                autoFocus
              />
            ) : (
              <>
                {description || "Clique no lápis para adicionar uma descrição."}
                <EditIcon onClick={() => setEditingDesc(true)} />
              </>
            )}
          </DescriptionBox>
        </ProfileCard>
      </Container>
    </>
  );
}

export default Perfil;
