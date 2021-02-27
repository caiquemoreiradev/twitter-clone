import React from 'react';

import SearchIcon from '@material-ui/icons/Search';

import './styles.css';
import WidgetPost from '../WidgetPost';
import WhoToFollow from '../WhoToFollow';

function Widgets() {
  return (
    <div className="widgets__container">
      <div className="widgets__input">
        <SearchIcon className='widgets__searchIcon' />
        <input placeholder='Search Twitter' />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <WidgetPost
          category='Plenitude e Beleza'
          time='Now'
          title='Gisele Reis é eleita mais uma vez a mulher mais linda do mundo'
          trendingCategory={['Estilo de Vida', 'Beleza']}
          image='https://instagram.fcgh2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/93243806_2982808081742702_6507545275064647680_n.jpg?_nc_ht=instagram.fcgh2-1.fna.fbcdn.net&_nc_ohc=wHATAIWebAkAX9ttQBO&oh=a23d0a2b6cb69acb1ff0954afd9f957d&oe=5F957CA2'
        />

        <WidgetPost
          category='Gaming'
          time='1 Hour ago'
          title='Rocksteady teases new Suicide Squad game'
          trendingCategory={['Suicide Squad', '#SuicideSquadGame']}
          image='https://pbs.twimg.com/profile_images/1291720745152729089/AuqAD7JC_400x400.jpg'
        />

        <WidgetPost
          category='Gaming'
          time='3 Days ago'
          title='Embarque no mundo de Cyberpunk 2077'
          trendingCategory={['Cyberpunk - 2077', '#CyperpunkOpenWorldGame']}
          image='https://pbs.twimg.com/profile_images/1236608518347788295/IaKy3w-m_400x400.png'
        />

        <WidgetPost
          category='Gaming'
          time='A week ago'
          title='Step Into The Knight'
          trendingCategory={['Gotham Knights', 'Rocksteady Studios']}
          image='https://pbs.twimg.com/profile_images/1297225060957085702/FgCF4a2i_400x400.jpg'
        />

        <h3 className='whoFollow'>Who to follow</h3>

        <WhoToFollow
          image='https://pbs.twimg.com/profile_images/1145635866288803841/pQoUBU0C_400x400.png'
          name='Rocksteady Studios'
          username='@RocksteadyGames'
        />

        <WhoToFollow
          image='https://pbs.twimg.com/profile_images/1278183948279922690/ybnDHXn7_400x400.jpg'
          name='Playstation'
          username='@PlayStation'
        />

        <WhoToFollow
          image='https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg'
          name='Bill Gates'
          username='@BillGates'
        />
      </div>
    </div>
  );
}

export default Widgets;