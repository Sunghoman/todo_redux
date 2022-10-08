import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";

const TodoItem = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const todoList = useSelector((state) => state.reducer.todos);
  const todos = todoList.find(data => data.id === Number(id));
  const status = todos.isDone;

  return(
    <Detail>
      <div className="idNumber" isDone={status}>id: {todos.id}</div>
        <button
          onClick={() => {navigate("/")}}
        >메인으로</button>
        <div class="card active" id="overview">
          <div class="card-content">
            <div class="row">
              <div class="left col">
                <h1>{todos.title}</h1>
                <h3>{todos.body}</h3>
              </div>
            </div>
          </div>
        </div>
    </Detail>
  )
}

export default TodoItem;

const Detail = styled.div`
  box-sizing: border-box;
  display: flex;
	background-color: #eaeaea;
  font-weight: 300;
	line-height: 1.8;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,.1), 3px 5px 20px rgba(0,0,0,.2);
  width: 500px;
	height: 400px;
	position: relative;
	display: flex;
	align-items: flex-end;
	padding: 30px;
  & .idNumber {
    position: absolute;
    top: 30px;
    left: 50px;
    z-index: 6;
    color: rgba(0,0,0,0.7);
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 16px;
    font-weight: 900;
    padding: 5px 15px;
    border-radius: 20px;
    background: rgba(0,0,0,.1);
    line-height: 1;
    text-shadow: 0 1px 0px rgba(255,255,255,.1);
  }
  .card{
		display: inline-block;
		margin-right: 20px;
	}
	.card-content{
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		transition: -webkit-clip-path 1s ease;
		padding: 100px 0 0;
		overflow: hidden;
		border-radius: 5px;
		.row{
			display: table;
			width: 100%;
			height: 100%;
		}
		.col{
			width: 50%;
			height: 100%;
			display: table-cell;
			transition: .3s ease .3s;
			transform: translate3d(0,0,0);
			vertical-align: top;
			h1{
				font-weight: 500;
				font-size: 3em;
				line-height: 1;
				margin: 0 0 30px;
				strong{
					font-weight: 700;
					display: block;
				}
			}
			&.left{
				transform: translate3d(0,0, 0);
				opacity: 0;
				padding-left: 50px;
			}
		}
	}
	.card.active .col{
		transform: translate3d(0,0,0);
		opacity: 1;
	}
  & button {
    cursor: pointer;
    z-index: 999;
  }
`